function FeedbackDAO(connection) {
    this._connection = connection;

    FeedbackDAO.prototype.salvar = (feedback, callback) => {
        this._connection.query("INSERT INTO feedback SET ?", feedback, callback);
    };

    FeedbackDAO.prototype.consultarFeedbacks = (callback) => {
        this._connection.query("SELECT * FROM feedback WHERE classificacao <> 'oi'", callback);
        this._connection.end();
    };
}

module.exports = () => {
    return FeedbackDAO;
};
