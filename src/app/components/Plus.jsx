import React from "react";

function Plus() {
        return (
                <>
                        {Array.from({ length: 4 }).map((_, index) => (
                                <span key={index} className="plus">
                                        <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1rem"
                                                height="1rem"
                                                viewBox="0 0 24 24"
                                        >
                                                <path d="M0 0h24v24H0z" fill="none" />
                                                <path fill="currentColor" d="M23 11v2H13v10h-2V13H1v-2h10V1h2v10z" />
                                        </svg>
                                </span>
                        ))}
                </>
        );
}

export default Plus;
