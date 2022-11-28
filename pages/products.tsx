import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode, FilterOperator } from 'primereact/api';
import React, { useState, useEffect } from 'react';
import { InputText } from 'primereact/inputtext';
import { ProductService } from '../service/ProductService';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [multiSortMeta, setMultiSortMeta] = useState([{ field: 'category', order: -1 }]);
    const productService = new ProductService();
    useEffect(() => {
        productService.getProductsSmall().then(data => setProducts(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const formatCurrency = (value:any) => {
        return value.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
    }

    const priceBodyTemplate = (rowData:any) => {
        return formatCurrency(rowData.price);
    }

    const [globalFilterValue, setGlobalFilterValue] = useState('');
    const [filters, setFilters] = useState({
      'global': { value: null, matchMode: FilterMatchMode.CONTAINS },
      'name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
      'country.name': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
      'representative': { value: null, matchMode: FilterMatchMode.IN },
      'date': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
      'balance': { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
      'status': { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
      'activity': { value: null, matchMode: FilterMatchMode.BETWEEN }
  });

    const onGlobalFilterChange = (e:any) => {
        const value = e.target.value;
        let _filters = { ...filters };
        _filters['global'].value = value;
  
        setFilters(_filters);
        setGlobalFilterValue(value);
    }
    return (
        <div className="card">
              <h4 className='mt-1 text-xl'>Products</h4>
              <div className="grid p-fluid">
                <div className="col-12 md:col-4">
                  <span className="p-input-icon-left">
                      <i className="pi pi-search" />
                      <InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
                  </span>
                </div>
              </div>
              <Card>
                <DataTable value={products} removableSort responsiveLayout="scroll" filters={filters}>
                  <Column field="code" header="Code" sortable></Column>
                  <Column field="name" header="Name" sortable></Column>
                  <Column field="category" header="Category" sortable></Column>
                  <Column field="quantity" header="Quantity" sortable></Column>
                  <Column field="price" header="Price" body={priceBodyTemplate} sortable></Column>
                </DataTable>
              </Card>
            </div>
    );
};
export default Products;