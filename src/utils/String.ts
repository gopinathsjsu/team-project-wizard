const handleOptionOverflow = (options: string[] = []) => {
    if(options.length > 3)
        return options.slice(0, 3).join(", ") + ` +${options.length - 3}`
    options.join(", ");
}

export {handleOptionOverflow};