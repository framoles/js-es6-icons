const container = document.getElementById("container");

function createIcon(data) {
    data.forEach(element => {
        const { family, prefix, name, color } = element;
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
            <i class="${family} ${prefix}${name}" style="color: ${color}"></i>
            <p>${name}</p>
        `;
        container.appendChild(div);
    });
}

createIcon(icon);