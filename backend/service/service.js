import Model from "../models/model.js"


export const fetchDataByCategory = async(category,page=1,limit=5)=>{
     try {
         
            const data =  await Model.aggregate([

                {
                    $facet:{
                                      
                        totalCountOfCategories:[
                             {
                                 $group:{
                                    _id:"$category",
                                    total:{$sum:1}
                                }
                             }
                        ],
                       
                        data:[
                            {$match:{category:category}},
                            {$skip:(page-1) * limit},
                            {$limit:limit}
                        ]
                    }
                }
            ])
            const dataToSend = data[0].totalCountOfCategories.reduce((acc,e)=>{
                acc[e._id] = e.total
                return acc
            },{})
            dataToSend.data = data[0].data
            console.log("mocked",dataToSend)
            return dataToSend
        } catch (error) {
          throw new Error(`error while fetching Data : ${error.message}`)   
        }
}