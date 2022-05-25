const formatDate = (date: Date): string => {
    let month = date.getMonth()+1;
    return `${date.getDate().toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${date.getFullYear()}`;
}

export default formatDate;