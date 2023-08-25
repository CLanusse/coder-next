
export async function generateMetadata({params, searchParams}, parent) {

    return {
        title: `CoderApp - ${params.categoria}`,
    }
}

const Productos = ({params}) => {
    console.log(params)

    return (
        <div>
            Estás viendo: {params.categoria}
        </div>
    )
}

export default Productos