const csrf = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

export default async function (url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "X-CSRF-TOKEN": csrf,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    });

    // const debugWindow = window.open();
    // debugWindow.document.write(await response.text());
    return await response.json();
}