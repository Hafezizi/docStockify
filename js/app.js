(function () {
    const pages = window.DOCS || [];
    const byId = Object.fromEntries(pages.map((page) => [page.id, page]));
    const nav = document.getElementById("nav");
    const article = document.getElementById("article");
    const searchInput = document.getElementById("search-input");
    const searchPanel = document.getElementById("search-panel");
    const searchForm = document.getElementById("search-form");
    const sidebar = document.getElementById("sidebar");
    const backdrop = document.getElementById("backdrop");
    const menuBtn = document.getElementById("menu-btn");

    const plain = (html) => {
        const node = document.createElement("div");
        node.innerHTML = html.replace(/></g, "> <");
        return (node.textContent || "").replace(/\s+/g, " ").trim();
    };

    const index = pages.map((page) => ({
        page,
        text: (page.title + " " + page.lead + " " + plain(page.body)).toLowerCase(),
    }));

    function slug(value) {
        return value
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)/g, "");
    }

    function renderNav(activeId) {
        const groups = [];
        pages.forEach((page) => {
            let group = groups.find((item) => item.name === page.group);
            if (!group) {
                group = { name: page.group, items: [] };
                groups.push(group);
            }
            group.items.push(page);
        });

        nav.innerHTML = groups.map((group) => `
            <div class="nav-group">
                <p>${group.name}</p>
                ${group.items.map((page) => `
                    <a href="#${page.id}" class="${page.id === activeId ? "active" : ""}">${page.nav}</a>
                `).join("")}
            </div>
        `).join("");
    }

    function renderPage(id) {
        const page = byId[id] || pages[0];
        const position = pages.findIndex((item) => item.id === page.id);
        const previous = pages[position - 1];
        const next = pages[position + 1];

        article.innerHTML = `
            <p class="kicker">${page.group}</p>
            <h1>${page.title}</h1>
            <p class="lead">${page.lead}</p>
            <div class="layout">
                <div class="prose" id="prose">${page.body}</div>
                <aside class="toc" id="toc"></aside>
            </div>
            <nav class="pager" aria-label="Pages voisines">
                ${previous ? `<a href="#${previous.id}"><span>Précédent</span>${previous.nav}</a>` : "<span></span>"}
                ${next ? `<a class="right" href="#${next.id}"><span>Suivant</span>${next.nav}</a>` : ""}
            </nav>
        `;

        const prose = document.getElementById("prose");
        const toc = document.getElementById("toc");
        const headings = [...prose.querySelectorAll("h2")];
        headings.forEach((heading) => {
            if (!heading.id) heading.id = slug(heading.textContent);
        });
        if (headings.length) {
            toc.innerHTML = `<p>Sur cette page</p>` + headings.map((heading) => `<a href="#${page.id}">${heading.textContent}</a>`).join("");
            toc.querySelectorAll("a").forEach((link, index) => {
                link.addEventListener("click", (event) => {
                    event.preventDefault();
                    headings[index].scrollIntoView({ behavior: "smooth", block: "start" });
                    history.replaceState(null, "", `#${page.id}`);
                });
            });
        } else {
            toc.remove();
        }

        document.title = `${page.nav} · Stockify`;
        const meta = document.querySelector(".top-meta");
        if (meta) meta.textContent = page.id === "offre" ? "À lire en premier" : "Guide d’utilisation";
        renderNav(page.id);
        closeMenu();
        article.focus({ preventScroll: true });
    }

    function currentId() {
        const id = location.hash.replace("#", "");
        return byId[id] ? id : "offre";
    }

    function showResults(query) {
        const needle = query.trim().toLowerCase();
        if (needle.length < 2) {
            searchPanel.hidden = true;
            searchPanel.innerHTML = "";
            return;
        }
        const hits = index
            .filter((item) => item.text.includes(needle))
            .map((item) => {
                const title = `${item.page.nav} ${item.page.title}`.toLowerCase();
                return { ...item, score: title.includes(needle) ? 1 : 0 };
            })
            .sort((a, b) => b.score - a.score)
            .slice(0, 6);
        searchPanel.hidden = false;
        searchPanel.innerHTML = hits.length
            ? hits.map((hit) => {
                const start = hit.text.indexOf(needle);
                const snippet = hit.text.slice(Math.max(0, start - 40), start + 90);
                return `<a href="#${hit.page.id}"><strong>${hit.page.nav}</strong><span>${snippet}…</span></a>`;
            }).join("")
            : `<div class="empty">Aucun résultat pour « ${query.replace(/[<>]/g, "")} ».</div>`;
    }

    function closeMenu() {
        sidebar.classList.remove("open");
        backdrop.hidden = true;
        menuBtn.setAttribute("aria-expanded", "false");
    }

    menuBtn.addEventListener("click", () => {
        const open = sidebar.classList.toggle("open");
        backdrop.hidden = !open;
        menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    backdrop.addEventListener("click", closeMenu);

    searchInput.addEventListener("input", () => showResults(searchInput.value));
    searchForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const first = searchPanel.querySelector("a");
        if (first) first.click();
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "/" && document.activeElement !== searchInput) {
            event.preventDefault();
            searchInput.focus();
        }
        if (event.key === "Escape") {
            searchPanel.hidden = true;
            closeMenu();
        }
    });
    document.addEventListener("click", (event) => {
        if (!event.target.closest(".search") && !event.target.closest("#search-panel")) {
            searchPanel.hidden = true;
        }
    });

    window.addEventListener("hashchange", () => renderPage(currentId()));
    renderPage(currentId());
})();
