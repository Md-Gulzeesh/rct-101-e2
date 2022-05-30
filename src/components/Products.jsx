import React from "react";
import { Flex, Spacer } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react'
import AddProduct from "./AddProduct";
import Product from "./Product";
import Pagination from "./Pagination";
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;

  return (
    <Flex>
      {/*  AddProduct */}
        <AddProduct/>
      <Grid>{/* List of Products */}
        <Product/>
      </Grid>
      {/* Pagination */}
      <Pagination/>
    </Flex>
  );
};

export default Products;
