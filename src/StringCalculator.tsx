import {
    Alert,
    Button,
    Grid2,
    TextField,
    Typography
} from "@mui/material";
import React, { useState } from "react";

const StringCalculator: React.FC = () => {
    const [input, setInput] = useState<string>(""); 
    const [result, setResult] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);
  
    const add = (numbers: string): number => {
      if (!numbers) return 0;
  
      let delimiter = ",";
      let customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
  
      if (customDelimiterMatch) {
        delimiter = customDelimiterMatch[1];
        numbers = numbers.substring(customDelimiterMatch[0].length);
      }
  
      const regex = new RegExp(`[${delimiter}\n]`);
      const numberArray = numbers.split(regex).map((num) => num.trim());
      const negatives: string[] = [];
      const sum = numberArray.reduce((acc, numStr) => {
        const num = parseInt(numStr, 10);
  
        if (isNaN(num)) return acc; // Ignore invalid numbers
        if (num < 0) negatives.push(numStr);
  
        return acc + num;
      }, 0);
  
      if (negatives.length > 0) {
        throw new Error(
          `Negative numbers not allowed: ${negatives.join(", ")}`
        );
      }
  
      return sum;
    };
      
    const onCalculateClick = () => {
        setError(null);
        setResult(null);
    
        try {
          const sum = add(input);
          setResult(sum);
        } catch (e: any) {
          setError(e.message);
        }
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
                {error && <Alert severity="error">{error}</Alert>}
        {result !== null && (
          <Alert severity="success">Sum: {result}</Alert>
        )}
            </Grid2>
        </Grid2>
    );
};

export default StringCalculator;
