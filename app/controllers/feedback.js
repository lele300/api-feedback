module.exports = (app) => {
    app.post("/feedback", (req, resp) => {
        let feedback = req.body;
        feedback.data_atendimento = new Date().toLocaleString();
        req.assert("nome_cliente", "É necessário informar o nome").notEmpty();
        req.assert("data_atendimento", "É necessário informar uma data").notEmpty();
        req.assert("classificacao", "É necessário informar uma classificação do atendimento").notEmpty();
        const erros = req.validationErrors();
        if (erros) {
            console.log("Ocorreu um erro de validação. Por favor, verifique as informações");
            resp.status(400).send(erros);
            return;
        }
        const connection = app.dao.connectionFactory();
        const feedbackDAO = new app.dao.FeedbackDAO(connection);

        feedbackDAO.salvar(feedback, (err, result) => {
            if (err) {
                console.log("Ocorreu um erro ao salvar no banco de dados.");
                console.log("Error: " + err);
                resp.status(500).send(err);
                return;
            }
            console.log("Feedback realizado com sucesso !!!");
            feedback.id = result.insertId;
            resp.status(201).send(feedback);
        }); // End feedback.salvar();
    });

    app.get("/feedback", (req, resp, next) => {
        const connection = app.app.dao.connectionFactory();
        const feedbackDAO = new app.app.dao.FeedbackDAO(connection);
        feedbackDAO.consultarFeedbacks((err, feedbacks) => {
            if(err) {
                return next(err);
            }
            resp.format({
                html : () => {
                    resp.render("feedback/feedback", {feedbacks : feedbacks});
                },
                json : () => {
                    resp.json(feedbacks);
                }
            })
        });
    });
};
