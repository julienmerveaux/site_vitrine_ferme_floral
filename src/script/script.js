export function embedKuuFormParticulier() {
    window.kuuFormIframeConfig = {
        "formContainer": "#kuuFormContent",
        "embedded": true,
        "producerType": "SINGLE",
        "saleChannel": "STANDARD",
        "producerId": "8140",
        "domain": "commande.kuupanda.com",
        "hideInfo": true,
        "hideCover": true
    };

    const script = document.createElement("script");
    script.src = "https://prod-kuu-brand-assets.s3.eu-west-3.amazonaws.com/embed.js";
    document.getElementsByTagName("head")[0].appendChild(script);
}

export function embedKuuFormProfessionnal() {
    window.kuuFormIframeConfig = {
        "formContainer": "#kuuFormContent",
        "embedded": true,
        "producerType": "SINGLE",
        "saleChannel": "PROFESSIONAL",
        "producerId": "8140",
        "domain": "commande.kuupanda.com",
        "hideInfo": true,
        "hideCover": true
    };
    const script = document.createElement("script");
    script.src = "https://prod-kuu-brand-assets.s3.eu-west-3.amazonaws.com/embed.js";
    document.getElementsByTagName("head")[0].appendChild(script);
}
