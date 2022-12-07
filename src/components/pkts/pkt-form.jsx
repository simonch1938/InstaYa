
const PktForm = ({ data }) => {
    const createPkt = () => {
        console.log('Create Package')
        console.log(data)
    }

    const updatePkt = () => {
        console.log('Update Pkt')
        console.log(data)
    }

    return (
        <>
            <div className="">
            {data.length != 0 ? updatePkt() : createPkt()}
            <form>
                {/*Here goes the Pkt form*/}
            </form>
            </div>
        </>
    )
}

export default PktForm