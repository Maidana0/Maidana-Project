import Head from "next/head"

const levels = ['fatal', 'error', 'warning', 'info', 'http', 'debug']
const logger = () => {
    const handleClick = async (level) => {
        const textContain = document.getElementById(level)
        fetch(`http://localhost:8080/loggerTest/${level}`, {
            method: "POST"
        })
            .then(res => res.json())
            .then(data => {
                textContain.innerHTML = `
                <p> Logger Level: ${data.loggerLevel} </p>
                <p> Message: ${data.message} </p>
                `
            })
            .catch(e => console.log(e))
    }

    return (
        <>
            <Head>
                <title>Logger Test</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>
                <h1>Loggers Test</h1>
                <hr />
                {
                    levels.map(level =>
                        <div key={level} style={{ margin: '.5rem auto', width: '50%' }}>
                            <br />
                            <button type='button' onClick={() => handleClick(level)}
                                style={{textTransform:'capitalize', height: '50px', width: '40%', borderRadious: '8px' }}>
                                {level}
                            </button>
                            <div id={level}>
                            </div>
                        </div>)
                }
            </div>
        </>
    )
}

export default logger