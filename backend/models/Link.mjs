import mongoose from "mongoose";

const Scheme = mongoose.Schema;

const LinksScheme = new Scheme({
    originalUrl:{
        type:String,
        required:true
    },
    shortUrl:{
        type:String,
        required:true
    },
})

const Link = mongoose.model('Links',LinksScheme);

export default Link;