import TypewriterComponent from "typewriter-effect"

export const TypeWriter = () => {
    return (
        <>
            <TypewriterComponent
                options={{
                    strings: ['Malagón Ortodoncia', 'Estética Dental'],
                    pauseFor: 2000,
                    autoStart: true,
                    loop: true,
                }}
            />
        </>
    )
}
