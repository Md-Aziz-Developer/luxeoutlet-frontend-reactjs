import { Spinner } from "react-bootstrap"

const SpinLoader = () => {
    return (
        <div className="w-full d-flex justify-content-center align-items-center gap-2">
            <Spinner color="dark" animation="border" />
            <span>Loading...</span>
        </div>
    )
}

export default SpinLoader