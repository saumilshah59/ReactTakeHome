import data from './mock-data'

export class HttpClient {
    fetchOrders = ( numbers=[], order_ids=[], types=[]) => {
        return new Promise((resolve, reject) => {
            if(numbers.length == 0 && order_ids.length == 0 && types.length == 0) {
                resolve([])
                return
            }
            setTimeout(() => {
                // Filter Data By Parameters 
                var filtered = Object.assign(data);
                if(numbers.length > 0)
                    filtered = filtered.filter((order_data) => numbers.includes(order_data.item_number));
                if(order_ids.length > 0)
                    filtered = filtered.filter((order_data) => order_ids.includes(order_data.order_id))
                if(types.length > 0)
                    filtered = filtered.filter((order_data) => types.includes(order_data.type))

                resolve(filtered)
            }, 100);
        })
    }
}