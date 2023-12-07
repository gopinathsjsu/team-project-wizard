const handleShareClick = () => {
    const input = document.createElement("input");
    input.value = window.location.href;
    document.body.appendChild(input);
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(input);
    alert("URL copied to clipboard: " + input.value);
};

export {handleShareClick};