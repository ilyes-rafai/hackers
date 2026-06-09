import React from "react";

export default function AnimatedBlob() {
        return (
                <div
                        className="w-50 h-50 blur-3xl animate-blob-rotate"
                        style={{
                                backgroundImage: "linear-gradient(#F53003, #F53003)",
                                borderRadius: "30% 70% 70% 30%/30% 30% 70% 70%",
                                opacity: 0.7,
                        }}
                />
        );
}
