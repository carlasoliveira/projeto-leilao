import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Dropdown } from 'primereact/dropdown';
import AuctionService from "../../service/AuctionService";

const Auction = () => {
    const [auctions, setAuctions] = useState([]);
    const [auction, setAuction] = useState({ name: "", category: "", observation: "" });
    const [dialogVisible, setDialogVisible] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [loading, setLoading] = useState(true);
    const toast = useRef(null);

    const auctionService = new AuctionService();

    useEffect(() => {
        loadAuctions();
    }, []);

    const loadAuctions = async () => {
        setLoading(true);
        try {
            const data = await auctionService.list();
            setAuctions(data);
        } catch (error) {
            toast.current.show({
                severity: "error",
                summary: "Erro",
                detail: "Erro ao buscar os leilões!",
            });
        } finally {
            setLoading(false);
        }
    };

    const openNew = () => {
        setAuction({ name: "", observation: "" });
        setDialogVisible(true);
        setIsEdit(false);
    };

    const hideDialog = () => {
        setDialogVisible(false);
    };

    const saveAuction = async () => {
        try {
            if (isEdit) {
                await auctionService.update(auction);
                toast.current.show({ severity: "success", summary: "Atualizado", detail: "Leilão atualizado com sucesso!" });
            } else {
                await auctionService.insert(auction);
                toast.current.show({ severity: "success", summary: "Criado", detail: "Leilão criado com sucesso!" });
            }
            loadAuctions();
        } catch (error) {
            toast.current.show({
                severity: "error",
                summary: "Erro",
                detail: "Erro ao salvar leilão",
            });
        } finally {
            hideDialog();
        }
    };

    const editAuction = (auction) => {
        setAuction({ ...auction });
        setDialogVisible(true);
        setIsEdit(true);
    };

    const confirmDeleteAuction = (auction) => {
        confirmDialog({
            message: `Remover o leilão "${auction.name}"?`,
            header: "Confirmaçõa",
            icon: "pi pi-exclamation-triangle",
            accept: () => deleteAuction(auction),
        });
    };

    const deleteAuction = async (auction) => {
        try {
            await auctionService.delete(auction.id);
            toast.current.show({ severity: "warn", summary: "Removido", detail: "Leilão removido com sucesso" });
            loadAuctions();
        } catch (error) {
            toast.current.show({
                severity: "error",
                summary: "Erro",
                detail: "Erro ao remover o leilão",
            });
        }
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <>
                <Button
                    icon="pi pi-pencil"
                    className="p-button-rounded p-button-success mr-2"
                    onClick={() => editAuction(rowData)}
                />
                <Button
                    icon="pi pi-trash"
                    className="p-button-rounded p-button-danger"
                    onClick={() => confirmDeleteAuction(rowData)}
                />
            </>
        );
    };

    const dialogFooter = (
        <div>
            <Button label="Cancelar" icon="pi pi-times" className="p-button-text" onClick={hideDialog} />
            <Button label="Salvar" icon="pi pi-check" className="p-button-text" onClick={saveAuction} />
        </div>
    );

    return (
        <div className="p-grid p-justify-center">
            <Toast ref={toast} />
            <ConfirmDialog acceptLabel="Sim" rejectLabel="Não"/>
          
                <Button label="Novo Leilão" icon="pi pi-plus" className="p-button-success" onClick={openNew} />
           
            <DataTable
                value={auctions}
                loading={loading}
         
            >
                <Column field="name" header="Nome"></Column>
                <Column field="id_category" header="Categoria"></Column>
                <Column field="observation" header="Observação"></Column>
                <Column body={actionBodyTemplate} header="Ações"></Column>
            </DataTable>

            <Dialog
                visible={dialogVisible}
                style={{ width: "30vw" }}
                header={isEdit ? "Editar Leilão" : "Novo Leilão"}
                modal
                footer={dialogFooter}
                onHide={hideDialog}
            >
                <div className="field">
                    <label htmlFor="name">Nome</label>
                    <InputText
                        id="name"
                        value={auction.name}
                        onChange={(e) => setAuction({ ...auction, name: e.target.value })}
                        required
                    />
                </div>
                <div className="field">
                    <label htmlFor="category">Categoria</label>
                    <InputText
                        id="category"
                        value={auction.category}
                        onChange={(e) => setAuction({ ...auction, category: e.target.value })}
                        required
                    />
                </div>
                <div className="field">
                    <label htmlFor="observation">Observação</label>
                    <InputText
                        id="observation"
                        value={auction.observation}
                        onChange={(e) => setAuction({ ...auction, observation: e.target.value })}
                    />
                </div>
            </Dialog>
        </div>
    );
};

export default Auction;