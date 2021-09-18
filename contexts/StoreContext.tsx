import React, { useContext, useEffect, useState } from "react";
import { store } from "../firebase";

/* eslint-disable @typescript-eslint/no-explicit-any*/
const StoreContext = React.createContext<any>(null);

export function useStore(): any {
  return useContext(StoreContext);
}

export function StoreProvider({ children }: any): any {
  const [loading, setLoading] = useState(false);

  // CREATE FUNCTION
  function addItem(itemToAdd: Object, collectionType: string, itemID: string) {
    const ref = store.collection(collectionType);
    ref
      .doc(itemID)
      .set(itemToAdd)
      .catch((err: unknown) => {
        console.error(err);
      });
  }

  // EDIT FUNCTION
  function editItem(
    itemToEdit: Object,
    itemToEditID: string,
    collectionType: string
  ) {
    const ref = store.collection(collectionType);
    ref
      .doc(itemToEditID)
      .update(itemToEdit)
      .catch((err: unknown) => {
        console.error(err);
      });
  }

  //DELETE FUNCTION
  function deleteItem(idToDelete: string, collectionType: string) {
    const ref = store.collection(collectionType);

    ref
      .doc(idToDelete)
      .delete()
      .catch((err: unknown) => {
        console.error(err);
      });
  }

  const value = { addItem, deleteItem, editItem };

  return (
    <StoreContext.Provider value={value}>
      {!loading && children}
    </StoreContext.Provider>
  );
}
