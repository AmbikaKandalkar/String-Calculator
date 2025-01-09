import {
    Button,
    Grid2,
    TextField,
    Typography
} from "@mui/material";
import React, { useState } from "react";

const StringCalculator: React.FC = () => {
    const [input, setInput] = useState<string>(""); 


    const onCalculateClick = () => {

    };

    return (
        <Grid2 container sx={{ mt: 5, display: "flex", justifyContent: "center" }} >
            <Grid2 size={12}>
                <Typography variant="h4">
                    String Calculator
                </Typography>
            </Grid2>
            <Grid2 size={6} display="flex" flexDirection="column" gap={2}>
                <TextField
                    label="Enter numbers"
                    variant="outlined"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    multiline
                />
                <Button variant="contained" onClick={onCalculateClick}>
                    Calculate
                </Button>
                 
            </Grid2>
        </Grid2>
    );
};

export default StringCalculator;
