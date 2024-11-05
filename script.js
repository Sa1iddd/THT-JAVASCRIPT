document.getElementById("contact").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    let phone = document.getElementById("phone").value;

    if (!email || !name || !description || !phone) {
        alert("Semua field wajib diisi.");
        return;
    }

    if (!/^[0-9]+$/.test(phone)) {
        alert("Nomor HP harus berupa angka.");
        return;
    }

    if (phone.startsWith("0")) {
        phone = "62" + phone.slice(1);
    }

    const message = `Nama: ${name} \nEmail: ${email} \nPesan: ${description} \nNomor HP: ${phone}`;
    const whatsappUrl = `https://wa.me/6285394582783?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
});