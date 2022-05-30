import React from "react";
import { Button, ButtonGroup, styled, useDisclosure } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import { Radio, RadioGroup } from '@chakra-ui/react';
import axios from "axios";
// const AddProduct = () => {
//   // TODO: Remove below const and instead import them from chakra
//   // const Button = () => <div />;
//   // const Modal = () => <div />;
//   // const ModalBody = () => <div />;
//   // const Input = () => <div />;
//   // const Select = () => <div />;
//   // const RadioGroup = () => <div />;
//   // const Radio = () => <div />;
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   return (
//     <>
//       <Button my={4} data-cy="add-product-button" onClick={onOpen}>Add New Product</Button>
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalBody pb={6}>
//           <Input data-cy="add-product-title" placeholder="Product Title"/>
//           <Select data-cy="add-product-category">
//             <option data-cy="add-product-category-shirt">Shirt</option>
//             <option data-cy="add-product-category-pant">Pant</option>
//             <option data-cy="add-product-category-jeans">Jeans</option>
//           </Select>
//           <RadioGroup data-cy="add-product-gender">
//             <Radio data-cy="add-product-gender-male">Male</Radio>
//             <Radio data-cy="add-product-gender-female">Female</Radio>
//             <Radio data-cy="add-product-gender-unisex">Unisex</Radio>
//           </RadioGroup>
//           <Input data-cy="add-product-price" />
//           <Button data-cy="add-product-submit-button">Create</Button>
//         </ModalBody>
//       </Modal>
//     </>
//   );
// };
function AddProduct() {
  const { isOpen, onOpen, onClose } = useDisclosure();
 
  const handledata = (e)=>{
    console.log(e)
  }
  const handlechange =(e)=>{
    console.log(e);
  }
  const submit = (e)=>{
    e.preventDefault();

  }

  return (
    <>
      <center><Button my={4} data-cy="add-product-button" onClick={onOpen} ml="40rem">Add New Product</Button></center>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <form onSubmit={submit}>
          <label>Title</label>
          <Input data-cy="add-product-title" placeholder="Title" mb="10px" onChange={handlechange}/>
          <label>Category</label>
           <Select data-cy="add-product-category" mb="10px" onChange={handlechange}>
             <option value="--------------">Category</option>
             <option data-cy="add-product-category-shirt">Shirt</option>
             <option data-cy="add-product-category-pant">Pant</option>
             <option data-cy="add-product-category-jeans">Jeans</option>
           </Select>
           <label>Gender</label>
           <RadioGroup data-cy="add-product-gender" mb="10px" onChange={handlechange}>
             <Radio data-cy="add-product-gender-male" value="male">Male</Radio>
             <Radio data-cy="add-product-gender-female" value = "female">Female</Radio>
             <Radio data-cy="add-product-gender-unisex" value = "unisex">Unisex</Radio>
           </RadioGroup>
           <label>Price</label>
           <Input data-cy="add-product-price" mb="10px" type="number" onChange={handlechange} placeholder="Rs.   Price"/>
           <Button data-cy="add-product-submit-button" onClick={submit} onClickCapture={onClose}>Create</Button>
          </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}
export default AddProduct;
