from fastapi import Body, FastAPI, Request, Response, status
import util
from pydantic import BaseModel
from fastapi.responses import JSONResponse
from starlette.middleware.cors import CORSMiddleware


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/get_location_names")
async def get_location_names():
    
    return {"area": util.get_location_names()}

@app.post("/predict_home_price")
async def predict_home_price(
    int_sqft: float = Body(..., example = 1000.0), 
    area: str = Body(..., example="Anna Nagar"), 
    bhk: int = Body(..., example=3), 
    n_bathroom: int = Body(..., example= 2)
):
    total_sqft = float(int_sqft)
    location = area
    bath = int(n_bathroom)
    bhk = int(bhk)

    estimated_price = util.get_estimated_price(location, total_sqft, bhk, bath)

    return {"estimated_price": estimated_price}
