export const getAllPackages = async (req, res) => {
    try {
        const packages = await Package.find();
        res.json(packages);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get package by ID
export const getPackageById = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await Package.findOne({ id });
        if (!data) {
            return res.status(404).json({ message: 'Package not found' });
        }
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};