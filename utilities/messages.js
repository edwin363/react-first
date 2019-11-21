export const errorMessage = (error) => {
    return (
        <div class="alert alert-danger" role="alert">
           {error}
        </div>
    )
}

export const successMessage = (success) => {
    return(
        <div class="alert alert-success" role="alert">
            {success}
        </div>
    )
}

export const warningMessage = (warning) => {
    return(
        <div class="alert alert-warning" role="alert">
            {warning}
        </div>
    )
}

export const infoMessage = (info) => {
    return(
        <div class="alert alert-info" role="alert">
            {info}
        </div>
    )
}