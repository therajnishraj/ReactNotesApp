import { React, useState, useEffect, useRef } from "react";
import { Add } from "../dialog/Add";
import axiosInstance from "../auth/Intercept";
import ConfigUrl from "../config/ConfigUrl";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import Update from "../dialog/Update";
import { toast } from "react-toastify";

function Home() {
  const [showDialog, setShowDialog] = useState(false);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [rowData, setRowData] = useState({});
  const [isDelete, setIsDelete] = useState();

  const accept = (id) => {
    axiosInstance
      .delete(`${ConfigUrl.DELETE_NOTE_BY_ID}/${id}`)
      .then((response) => {
        toast.success("Note deleted successfully!");
        setIsDelete(true);
      })
      .catch((error) => {
        toast.error("Something went wrong while delete the note");
      });
  };

  const reject = () => {};
  const handleClose = () => {
    setShowDialog(false);
  };
  

  const handleUpdateClose = () => {
    setShowUpdateDialog(false);
  };

  const handleShow = () => setShowDialog(true);

  const handleNote = () => {
    setShowDialog(true);
  };

  const [data, setData] = useState([]);
  const handleEdit = (data) => {
    console.log(data);
    setShowUpdateDialog(true);
    setRowData(data);
  };
  const handleDelete = (data) => {
    console.log(data);
    confirmDialog({
      message: "Do you want to delete this record?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      defaultFocus: "reject",
      acceptClassName: "p-button-danger",
      accept: () => accept(data.id),
      reject,
    });
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    axiosInstance
      .get(ConfigUrl.GET_NOTES_LIST)
      .then((response) => {
        setData(response.data);
        setIsDelete(false);
      })
      .catch((error) => {
        toast.error("Something went wrong while fatching note list!");
      });
  }, [isDelete, !showDialog,!showUpdateDialog]);

  return (
    <>
      <ConfirmDialog />
      <Add show={showDialog} close={handleClose} />
      <Update
        show={showUpdateDialog}
        close={handleUpdateClose}
        data={rowData}
      />
      <div>
        <h2>Welcome to the Home Page</h2>
        <p>This is the content of the Home page.</p>
        <i
          style={{
            cursor: "pointer",
            fontSize: "40px",
            padding: "10px",
            display: "block",
            textAlign: "right",
          }}
          onClick={handleNote}
          className="pi pi-plus"
        ></i>

        <div className="card" style={{ overflowY: "auto",    height: "50vh"}}>
          <DataTable
            paginator
            rows={5}
            value={data}
            tableStyle={{ minWidth: "50rem" }}
            
          >
            <Column field="id" header="ID"></Column>
            <Column field="title" header="Title"></Column>
            <Column field="content" header="Content"></Column>
            <Column field="createdAt" header="Created At"></Column>
            <Column field="updatedAt" header="Updated At"></Column>
            <Column
              header="Actions"
              body={(rowData) => (
                <div>
                  <i
                    className="pi pi-pencil"
                    onClick={() => handleEdit(rowData)}
                    style={{ marginRight: "20px", cursor: "pointer" }}
                  />
                  <i
                    className="pi pi-trash"
                    style={{ color: "red", cursor: "pointer" }}
                    onClick={() => handleDelete(rowData)}
                  />
                </div>
              )}
            />
          </DataTable>
        </div>
      </div>
    </>
  );
}

export default Home;
