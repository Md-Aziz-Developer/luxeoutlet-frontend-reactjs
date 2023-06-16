import { Fragment } from 'react';
import Modal from 'react-bootstrap/Modal';
import AddressForm from './AddressForm';
import AddressQuery from './AddressQuery';

const AddAddress = ({ modelState }) => {
    const { data, isLoading } = AddressQuery()
    const [showAddressModal, setShowAddressModal] = modelState
    const handleClose = () => setShowAddressModal(false);

    return (
        <Fragment>
            <Modal
                show={showAddressModal}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {!isLoading ? (
                        <AddressForm data={data} handleClose={handleClose} />
                    ) : (
                        <p>Loading...</p>
                    )}
                </Modal.Body>
            </Modal>
        </Fragment>
    );
}

export default AddAddress