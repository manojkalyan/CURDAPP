const Record = require('../models/Record');
const Category = require('../models/category'); // Import the Category model


exports.record_list = async (req, res) => {
    try {
        // Define a filter object based on active/inactive status
        const filter = {};
        if (req.query.status) {
            filter.isActive = req.query.status === 'active';
        }

        // Define a search query based on name
        const searchQuery = req.query.name ? { name: new RegExp(req.query.name, 'i') } : {};

        // Find records that match the filter and search query
        const records = await Record.find({ ...filter, ...searchQuery });

        res.render('index', { records });
    } catch (err) {
        console.error(err);
        res.redirect('back');
    }
};


exports.record_detail = async (req, res) => {
    const recordId = req.params.id;

    try {
        const record = await Record.findById(recordId);

        res.render('detail', { record });

    } catch (err) {
        console.error(err);
        res.redirect('back');
    }
};

exports.record_create_get = async (req, res) => {
    try {
        // Fetch categories from the Category model
        const categories = await Category.find({}, 'name');

        res.render('recordsCreate', { categories });
    } catch (err) {
        console.error(err);
        res.render('recordsCreate', { error: err.message });
    }
};

exports.record_create_post = async (req, res) => {
    const { name, description, category, isActive } = req.body;
    
    try {
        // Convert "on" to true, or set to false
        const isActiveBool = isActive === 'on';

       const records= await Record.create({ name, description, category, isActive: isActiveBool });
           req.flash('success', 'Success');

        return res.redirect("/records/recordList")
        
    } catch (err) {
        console.error(err);
            req.flash('error', 'Check email or password');

        return res.redirect("back")
    }
};


exports.record_update_get = async (req, res) => {
    const recordId = req.params.id;

    try {
        const record = await Record.findById(recordId);

        res.render('edit', { record });
    } catch (err) {
        console.error(err);
            req.flash('error', 'Check email or password');

        res.redirect('back');
    }
};

exports.record_update_post = async (req, res) => {
    const recordId = req.params.id;
    const { name, description, category, isActive } = req.body;

    try {
        // Convert "on" to true, or set to false
        const isActiveBool = isActive === 'on';

        const record = await Record.findByIdAndUpdate(
            recordId,
            { name, description, category, isActive: isActiveBool },
            { new: true } // To get the updated record
        );
            req.flash('success', 'Successfully');


        res.redirect('/records/recordList');
    } catch (err) {
        console.error(err);
            req.flash('error', 'Check email or password');


        res.redirect('back');
    }
};

exports.record_delete = async (req, res) => {
    const recordId = req.params.id;

    try {
        await Record.findByIdAndDelete(recordId);
            req.flash('success', 'Successfully deleted');

        res.redirect('/records/recordList');

    } catch (err) {
        console.error(err);
    req.flash('error', 'Check email or password');
        res.redirect('/records/recordList');
    }
};

// Add a new controller method for bulk record deletion
exports.record_delete_bulk = async (req, res) => {
    const recordIdsToDelete = req.body.recordIds;

    try {
        await Record.deleteMany({ _id: { $in: recordIdsToDelete } });
            req.flash('success', 'Successfully deleted');

        res.redirect('back');
    } catch (err) {
        console.error(err);
    req.flash('error', 'Check email or password');
        res.redirect('back');
    }
};
