import TypewriterComponent from "typewriter-effect"

export const TypeWriter = ({message1, message2}) => {
    return (
        <>
            <TypewriterComponent
                options={{
                    strings: [message1, message2 ],
                    pauseFor: 2000,
                    autoStart: true,
                    loop: true,
                }}
            />
        </>
    )
}
