import express from "express";
import reviewMessage from "../models/reviewsMessage.js";

const router = express.Router();

export const getReviews = async (req, res) => {
    
    try {
        const postReviews = await reviewMessage.find();
        

        res.status(200).json(postReviews);
    } catch(error) {
        res.status(404).json({message: error});
    }
    
}

export const createReview = async (req, res) => {
    const post = req.body;

    const newReviewPost = new reviewMessage({ ...post, createdAt: new Date().toISOString() })

    try{
        await newReviewPost.save().then(res.status(200).json(newReviewPost));
    }catch(error) {
        return res.status(409).json({ message: error.message });
    }


}

export default router;