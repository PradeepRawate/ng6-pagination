export const STYLES = `
.pagination-container {
    margin: 5px 0;
    /* text-align: center; */
}
.pagination {
    padding-left: 0;
    margin: 5px 0;
    display: unset;
}

.pagination li {
    display: inline-block;
    padding: 5px 10px;
    margin: 1px;
    line-height: 1.42857143;
    color: #005282;
    text-decoration: none;
    background-color: #fff;
    cursor: pointer;
    border: unset;
}

.pagination li:hover, .pagination li.active {
    background: #588ead;
    color: #ffffff;
}

.pagination li.disabled, li.disabled:hover {
    cursor: not-allowed;
    pointer-events: none;
    color: rgb(139, 139, 139);
}

.paginate-caption {
    display: block;
    margin: 5px 10px;
}
`;
