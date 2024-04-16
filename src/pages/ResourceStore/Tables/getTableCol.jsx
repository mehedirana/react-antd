export const TableCol =()=>{
   return [
        {
            title: 'ID No',
            dataIndex: 'id_number',
            key: 'id_number',
            render: (text) => <a href="/">{text}</a>,
        },
        {
            title: 'Publisher Name',
            dataIndex: 'publisher_name',
            key: 'publisher_name',
        },
        {
            title: 'Topic',
            dataIndex: 'topic',
            key: 'topic',
        },
        {
            title: 'Date',
            key: 'date',
            dataIndex: 'date',
        }
   ] 
}