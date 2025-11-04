import React, { useState } from "react"

export default function JsxExample() {
    const [count, setCount] = useState(0)
    const dynamicId = `counter-btn-${count}`
    const imageUrl = "https://via.placeholder.com/80"

    function handleClick(e) {
        e.preventDefault()
        setCount(prev => prev + 1)
    }

    return (
        <div className="p-4 rounded-lg shadow-md max-w-sm">
            <img src={imageUrl} alt={`placeholder-${count}`} />
            <input type="hidden" value={count} />
            <p>
                {`Current count: ${count} (Rendered using JS expression)`}
            </p>
            <button
                id={dynamicId}
                data-count={count}
                onClick={handleClick}
                style={{ padding: "8px 12px", cursor: "pointer" }}
            >
                {count === 0 ? "Start" : `Count: ${count}`}
            </button>
            <br />
            <input
                type="checkbox"
                checked={count % 2 === 1}
                readOnly
            />
        </div>
    )
}