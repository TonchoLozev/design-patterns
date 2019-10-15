function CustomerProtoype(proto) {
    this.proto = proto;

    this.clone = () => {
        let customer = new Customer();

        customer.first = proto.first;
        customer.last = proto.last;
        customer.status = proto.status;

        return customer;
    };
}

function Customer(first, last, status) {
    this.first = first;
    this.last = last;
    this.status = status;

    this.say = () => {
        console.log(`name: ${this.first} ${this.last}, status: ${this.status}`);
    };
}

const proto = new Customer("James", "Dunder", "pending");
proto.say();

const prototype = new CustomerProtoype(proto);
const customer = prototype.clone();
customer.say();