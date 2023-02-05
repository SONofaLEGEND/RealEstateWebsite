from fastapi import FastAPI
import pickle
import json
import numpy as np
from pydantic import BaseModel

app = FastAPI()

__locations = None
__data_columns = None
__model = None
class HomePriceInput(BaseModel):
    int_sqft: float
    area: str
    bhk: int
    n_bathroom: int

def get_estimated_price(location, sqft, bhk, bath):
    try:
        loc_index = __data_columns.index(location.lower())
    except:
        loc_index = -1

    x = np.zeros(len(__data_columns))
    x[0] = sqft
    x[1] = bath
    x[2] = bhk
    if loc_index >= 0:
        x[loc_index] = 1

    return round(__model.predict([x])[0], 2)


def load_saved_artifacts():
    global __data_columns
    global __locations

    with open("./artifacts/columns.json", "r", encoding='utf-8') as f:
        __data_columns = json.load(f)['data_columns']
        __locations = __data_columns[3:]  # first 3 columns are sqft, bath, bhk

    global __model
    if __model is None:
        with open('./artifacts/chennai_home_prices_model.pickle', 'rb') as f:
            __model = pickle.load(f)

load_saved_artifacts()


@app.get("/get_location_names")
def get_location_names():
    return  __locations


@app.post("/predict_home_price")
def predict_home_price(home_price_input:HomePriceInput):
    total_sqft = home_price_input.int_sqft
    location = home_price_input.area
    bhk = home_price_input.bhk
    bath = home_price_input.n_bathroom  
    if not isinstance(total_sqft, float) or total_sqft <= 0:
        return {"error": "Invalid value for int_sqft"}
    if not isinstance(location, str) or location.strip() == "":
        return {"error": "Invalid value for area"}
    if not isinstance(bhk, int) or bhk <= 0:
        return {"error": "Invalid value for bhk"}
    if not isinstance(bath, int) or bath <= 0:
        return {"error": "Invalid value for n_bathroom"}
    
    return {
        "estimated_price": get_estimated_price(location, total_sqft, bhk, bath)
    }
