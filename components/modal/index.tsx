import React from 'react';
import {
   Modal,
   Input,
   Checkbox,
   Button,
   Navbar,
   ModalHeader,
   ModalBody,
   ModalFooter,
} from '@heroui/react';

export const ModalLogin = () => {
   const [visible, setVisible] = React.useState(false);
   const handler = () => setVisible(true);
   const closeHandler = () => {
      setVisible(false);
      console.log('closed');
   };
   return (
      <div>
         {/* todo: Link */}
         <Navbar onClick={handler}>Login</Navbar>
         {/* <Modal
            closeButton
            // blur
            aria-labelledby="modal-title"
            // open={visible}
            // todo: verify this
            onOpenChange={setVisible}
            onClose={closeHandler}
         > */}
            {/* <ModalHeader>
               <Text id="modal-title" size={18}>
                  Welcome to
                  <Text b size={18}>
                     NextUI
                  </Text>
               </Text>
            </ModalHeader>
            <ModalBody>
               <Input
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="Email"
                  //   contentLeft={<Mail fill="currentColor" />}
               />
               <Input
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="Password"
                  //   contentLeft={<Password fill="currentColor" />}
               />
               <Row justify="space-between">
                  <Checkbox>
                     <Text size={14}>Remember me</Text>
                  </Checkbox>
                  <Text size={14}>Forgot password?</Text>
               </Row>
            </ModalBody>
            <ModalFooter>
               <Button auto flat color="error" onClick={closeHandler}>
                  Close
               </Button>
               <Button auto onClick={closeHandler}>
                  Sign in
               </Button>
            </ModalFooter> */}
         {/* </Modal> */}
      </div>
   );
};
