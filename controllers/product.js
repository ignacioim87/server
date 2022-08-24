import database from "../bd.config.js";

//CONTROLADORES: FUNCIONES QUE EJECUTAN LOS ENDPOINTS 

export async function getProducts(req, res) {
    try {
        const [result] = await database.query('SELECT * FROM producto');

        return res.status(200).json({ code: 200, result: result });
    } catch (error) {
        return res.status(500).send({ code: 500, message: error.message });
    }
};

export async function saveProduct(req, res) {
    const { nombre, descripcion, precio,imagen } = req.body;
    try {
        await database.query('INSERT INTO producto SET?', {
            nombre: nombre,
            descripcion: descripcion,
            precio: precio,
            imagen: imagen
        })

        return res.status(200).send({ code: 200, message: 'Product saved' });
    } catch (error) {
        return res.status(500).send({ code: 500, message: error.message });
    }
};

export async function getProduct(req, res) {
    const { id } = req.params;
    try {
        const [result] = await database.query('SELECT * FROM producto WHERE id = ?', [id]);
        return res.status(200).json({ code: 200, result: result[0] });
    } catch (error) {
        return res.status(500).json({ code: 500, message: error.message });
    }
};

export async function deleteProduct(req, res) {
    const { id } = req.params;
    try {
        await database.query('DELETE FROM producto WHERE id = ?', [id]);

        return res.status(204).send({ code: 204, message: 'Product deleted' });
    } catch (error) {
        return res.status(500).send({ code: 500, message: error.message });
    }
};

export async function updateProduct(req, res) {
    const { id } = req.params;
    try {
        await database.query('UPDATE producto SET ? WHERE id = ?', [req.body, id]);

        return res.status(204).json({ code: 204, message: 'Product updated' });
    } catch (error) {
        return res.status(500).send({ code: 500, message: error.message });
    }
};
