/**
 * Created by dengzhou on 2017/11/24.
 */
//get.js
module.exports = function (req, res) {
    console.log(req.query.userName);
    res.json({code: 200, data: "this is a request"});
};