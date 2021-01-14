exports.get404 = (req, res, next) => {
    const error = new Error('Not Found');
    error.statusCode = 404;
    next(error); 
}

exports.get500 = (error, req, res, next) => {
    const error = new Error('Not Found');//50.40
    error.statusCode = 404;
    next(error); 
}