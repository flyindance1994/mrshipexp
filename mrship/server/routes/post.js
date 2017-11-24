/**
 * Created by dengzhou on 2017/11/24.
 */
//post.js
modules.exports = function (req, res) {
    console.log(req.body.userName);
    console.log(req.body.password);
    res.json({code: 200, data: "this is a post request"});
};