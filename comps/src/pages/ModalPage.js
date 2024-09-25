import React from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept!
      </Button>
    </div>
  );

  const ModalRender = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && ModalRender}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat
        mauris pellentesque, dapibus purus vitae, consectetur dolor. Praesent
        tristique semper nulla, vel ullamcorper nisl elementum sit amet. Cras
        elementum fermentum ex vitae hendrerit. Vestibulum et purus sed neque
        consectetur luctus. Fusce pulvinar condimentum massa, eget euismod
        mauris vestibulum vitae. Quisque pulvinar urna et neque sollicitudin,
        non luctus est mattis. Duis rhoncus libero vitae leo elementum, quis
        semper justo ullamcorper. Maecenas tincidunt hendrerit nunc id laoreet.
        Praesent nec turpis quis neque lobortis fringilla eu facilisis neque.
        Aenean sit amet laoreet felis. Aenean cursus fringilla ipsum ut feugiat.
        Etiam faucibus vestibulum velit ornare posuere.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat
        mauris pellentesque, dapibus purus vitae, consectetur dolor. Praesent
        tristique semper nulla, vel ullamcorper nisl elementum sit amet. Cras
        elementum fermentum ex vitae hendrerit. Vestibulum et purus sed neque
        consectetur luctus. Fusce pulvinar condimentum massa, eget euismod
        mauris vestibulum vitae. Quisque pulvinar urna et neque sollicitudin,
        non luctus est mattis. Duis rhoncus libero vitae leo elementum, quis
        semper justo ullamcorper. Maecenas tincidunt hendrerit nunc id laoreet.
        Praesent nec turpis quis neque lobortis fringilla eu facilisis neque.
        Aenean sit amet laoreet felis. Aenean cursus fringilla ipsum ut feugiat.
        Etiam faucibus vestibulum velit ornare posuere.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat
        mauris pellentesque, dapibus purus vitae, consectetur dolor. Praesent
        tristique semper nulla, vel ullamcorper nisl elementum sit amet. Cras
        elementum fermentum ex vitae hendrerit. Vestibulum et purus sed neque
        consectetur luctus. Fusce pulvinar condimentum massa, eget euismod
        mauris vestibulum vitae. Quisque pulvinar urna et neque sollicitudin,
        non luctus est mattis. Duis rhoncus libero vitae leo elementum, quis
        semper justo ullamcorper. Maecenas tincidunt hendrerit nunc id laoreet.
        Praesent nec turpis quis neque lobortis fringilla eu facilisis neque.
        Aenean sit amet laoreet felis. Aenean cursus fringilla ipsum ut feugiat.
        Etiam faucibus vestibulum velit ornare posuere.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat
        mauris pellentesque, dapibus purus vitae, consectetur dolor. Praesent
        tristique semper nulla, vel ullamcorper nisl elementum sit amet. Cras
        elementum fermentum ex vitae hendrerit. Vestibulum et purus sed neque
        consectetur luctus. Fusce pulvinar condimentum massa, eget euismod
        mauris vestibulum vitae. Quisque pulvinar urna et neque sollicitudin,
        non luctus est mattis. Duis rhoncus libero vitae leo elementum, quis
        semper justo ullamcorper. Maecenas tincidunt hendrerit nunc id laoreet.
        Praesent nec turpis quis neque lobortis fringilla eu facilisis neque.
        Aenean sit amet laoreet felis. Aenean cursus fringilla ipsum ut feugiat.
        Etiam faucibus vestibulum velit ornare posuere.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat
        mauris pellentesque, dapibus purus vitae, consectetur dolor. Praesent
        tristique semper nulla, vel ullamcorper nisl elementum sit amet. Cras
        elementum fermentum ex vitae hendrerit. Vestibulum et purus sed neque
        consectetur luctus. Fusce pulvinar condimentum massa, eget euismod
        mauris vestibulum vitae. Quisque pulvinar urna et neque sollicitudin,
        non luctus est mattis. Duis rhoncus libero vitae leo elementum, quis
        semper justo ullamcorper. Maecenas tincidunt hendrerit nunc id laoreet.
        Praesent nec turpis quis neque lobortis fringilla eu facilisis neque.
        Aenean sit amet laoreet felis. Aenean cursus fringilla ipsum ut feugiat.
        Etiam faucibus vestibulum velit ornare posuere.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat
        mauris pellentesque, dapibus purus vitae, consectetur dolor. Praesent
        tristique semper nulla, vel ullamcorper nisl elementum sit amet. Cras
        elementum fermentum ex vitae hendrerit. Vestibulum et purus sed neque
        consectetur luctus. Fusce pulvinar condimentum massa, eget euismod
        mauris vestibulum vitae. Quisque pulvinar urna et neque sollicitudin,
        non luctus est mattis. Duis rhoncus libero vitae leo elementum, quis
        semper justo ullamcorper. Maecenas tincidunt hendrerit nunc id laoreet.
        Praesent nec turpis quis neque lobortis fringilla eu facilisis neque.
        Aenean sit amet laoreet felis. Aenean cursus fringilla ipsum ut feugiat.
        Etiam faucibus vestibulum velit ornare posuere.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat
        mauris pellentesque, dapibus purus vitae, consectetur dolor. Praesent
        tristique semper nulla, vel ullamcorper nisl elementum sit amet. Cras
        elementum fermentum ex vitae hendrerit. Vestibulum et purus sed neque
        consectetur luctus. Fusce pulvinar condimentum massa, eget euismod
        mauris vestibulum vitae. Quisque pulvinar urna et neque sollicitudin,
        non luctus est mattis. Duis rhoncus libero vitae leo elementum, quis
        semper justo ullamcorper. Maecenas tincidunt hendrerit nunc id laoreet.
        Praesent nec turpis quis neque lobortis fringilla eu facilisis neque.
        Aenean sit amet laoreet felis. Aenean cursus fringilla ipsum ut feugiat.
        Etiam faucibus vestibulum velit ornare posuere.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat
        mauris pellentesque, dapibus purus vitae, consectetur dolor. Praesent
        tristique semper nulla, vel ullamcorper nisl elementum sit amet. Cras
        elementum fermentum ex vitae hendrerit. Vestibulum et purus sed neque
        consectetur luctus. Fusce pulvinar condimentum massa, eget euismod
        mauris vestibulum vitae. Quisque pulvinar urna et neque sollicitudin,
        non luctus est mattis. Duis rhoncus libero vitae leo elementum, quis
        semper justo ullamcorper. Maecenas tincidunt hendrerit nunc id laoreet.
        Praesent nec turpis quis neque lobortis fringilla eu facilisis neque.
        Aenean sit amet laoreet felis. Aenean cursus fringilla ipsum ut feugiat.
        Etiam faucibus vestibulum velit ornare posuere.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat
        mauris pellentesque, dapibus purus vitae, consectetur dolor. Praesent
        tristique semper nulla, vel ullamcorper nisl elementum sit amet. Cras
        elementum fermentum ex vitae hendrerit. Vestibulum et purus sed neque
        consectetur luctus. Fusce pulvinar condimentum massa, eget euismod
        mauris vestibulum vitae. Quisque pulvinar urna et neque sollicitudin,
        non luctus est mattis. Duis rhoncus libero vitae leo elementum, quis
        semper justo ullamcorper. Maecenas tincidunt hendrerit nunc id laoreet.
        Praesent nec turpis quis neque lobortis fringilla eu facilisis neque.
        Aenean sit amet laoreet felis. Aenean cursus fringilla ipsum ut feugiat.
        Etiam faucibus vestibulum velit ornare posuere.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat
        mauris pellentesque, dapibus purus vitae, consectetur dolor. Praesent
        tristique semper nulla, vel ullamcorper nisl elementum sit amet. Cras
        elementum fermentum ex vitae hendrerit. Vestibulum et purus sed neque
        consectetur luctus. Fusce pulvinar condimentum massa, eget euismod
        mauris vestibulum vitae. Quisque pulvinar urna et neque sollicitudin,
        non luctus est mattis. Duis rhoncus libero vitae leo elementum, quis
        semper justo ullamcorper. Maecenas tincidunt hendrerit nunc id laoreet.
        Praesent nec turpis quis neque lobortis fringilla eu facilisis neque.
        Aenean sit amet laoreet felis. Aenean cursus fringilla ipsum ut feugiat.
        Etiam faucibus vestibulum velit ornare posuere.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat
        mauris pellentesque, dapibus purus vitae, consectetur dolor. Praesent
        tristique semper nulla, vel ullamcorper nisl elementum sit amet. Cras
        elementum fermentum ex vitae hendrerit. Vestibulum et purus sed neque
        consectetur luctus. Fusce pulvinar condimentum massa, eget euismod
        mauris vestibulum vitae. Quisque pulvinar urna et neque sollicitudin,
        non luctus est mattis. Duis rhoncus libero vitae leo elementum, quis
        semper justo ullamcorper. Maecenas tincidunt hendrerit nunc id laoreet.
        Praesent nec turpis quis neque lobortis fringilla eu facilisis neque.
        Aenean sit amet laoreet felis. Aenean cursus fringilla ipsum ut feugiat.
        Etiam faucibus vestibulum velit ornare posuere.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat
        mauris pellentesque, dapibus purus vitae, consectetur dolor. Praesent
        tristique semper nulla, vel ullamcorper nisl elementum sit amet. Cras
        elementum fermentum ex vitae hendrerit. Vestibulum et purus sed neque
        consectetur luctus. Fusce pulvinar condimentum massa, eget euismod
        mauris vestibulum vitae. Quisque pulvinar urna et neque sollicitudin,
        non luctus est mattis. Duis rhoncus libero vitae leo elementum, quis
        semper justo ullamcorper. Maecenas tincidunt hendrerit nunc id laoreet.
        Praesent nec turpis quis neque lobortis fringilla eu facilisis neque.
        Aenean sit amet laoreet felis. Aenean cursus fringilla ipsum ut feugiat.
        Etiam faucibus vestibulum velit ornare posuere.
      </p>
    </div>
  );
};

export default ModalPage;
