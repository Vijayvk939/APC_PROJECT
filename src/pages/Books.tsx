import { useEffect, useRef, useState } from 'react';
import { Book, Download, Library, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

interface BookData {
    id: string;
    title: string;
    author: string;
    description: string;
    coverColor: string;
}

const books: BookData[] = [
    {
        id: '1',
        title: 'The Holy Bible (KJV)',
        author: 'Multiple Authors',
        description: 'The classic King James text treasured for its beauty and enduring influence.',
        coverColor: 'bg-red-900',
    },
    {
        id: '2',
        title: 'Pilgrim\'s Progress',
        author: 'John Bunyan',
        description: 'John Bunyan’s beloved allegory that charts the soul’s journey toward heaven.',
        coverColor: 'bg-blue-900',
    },
    {
        id: '3',
        title: 'Mere Christianity',
        author: 'C.S. Lewis',
        description: 'C.S. Lewis distills the heart of Christian belief with clarity and wit.',
        coverColor: 'bg-amber-800',
    },
    {
        id: '4',
        title: 'The Purpose Driven Life',
        author: 'Rick Warren',
        description: 'Rick Warren guides readers through forty days of purpose-centered devotion.',
        coverColor: 'bg-emerald-800',
    },
    {
        id: '5',
        title: 'The Cost of Discipleship',
        author: 'Dietrich Bonhoeffer',
        description: 'Bonhoeffer’s piercing call to costly grace and wholehearted obedience.',
        coverColor: 'bg-slate-800',
    },
    {
        id: '6',
        title: 'Knowing God',
        author: 'J.I. Packer',
        description: 'J.I. Packer’s classic invitation to deeper, more intimate knowledge of God.',
        coverColor: 'bg-indigo-900',
    }
];

const Books = () => {
    const [toastMessage, setToastMessage] = useState('');
    const [isToastVisible, setIsToastVisible] = useState(false);
    const hideToastTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        return () => {
            if (hideToastTimeout.current) {
                clearTimeout(hideToastTimeout.current);
            }
        };
    }, []);

    const showToast = (message: string) => {
        setToastMessage(message);
        setIsToastVisible(true);

        if (hideToastTimeout.current) {
            clearTimeout(hideToastTimeout.current);
        }

        hideToastTimeout.current = setTimeout(() => {
            setIsToastVisible(false);
        }, 3000);
    };

    const handleDownload = (bookTitle: string) => {
        // In a real application, this would trigger a file download
        showToast(`"${bookTitle}" downloaded successfully.`);
    };

    return (
        <>
            <Helmet>
                <link rel="canonical" href="https://agapepentecostalchurch.com/books" />
            </Helmet>
            <div className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-primary-50 via-white to-secondary-50">
            <div className="container mx-auto px-4">
                {isToastVisible && (
                    <div className="fixed top-24 right-6 z-50">
                        <div className="flex items-start space-x-3 rounded-xl bg-primary-900 text-white px-4 py-3 shadow-2xl border border-primary-600/50">
                            <Download className="w-4 h-4 mt-0.5 text-secondary-300" />
                            <span className="text-sm font-medium">{toastMessage}</span>
                        </div>
                    </div>
                )}

                <motion.div 
                    className="text-center mb-12 relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6 }}
                >
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/80 backdrop-blur-md border border-primary-100 text-primary-700 text-sm font-semibold shadow-md hover:shadow-lg hover:bg-white transition-all duration-200 absolute right-0 top-0"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back
                    </button>
                    <motion.div
                        className="inline-flex items-center px-3 xs:px-4 py-1.5 xs:py-2 mb-4 rounded-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 border border-primary-200/50 shadow-lg shadow-primary-900/5"
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        <Library className="w-3 h-3 xs:w-4 xs:h-4 text-primary-600 mr-1.5 xs:mr-2" />
                        <span className="text-xs xs:text-sm font-medium text-primary-700">Featured Collection</span>
                    </motion.div>
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        Spiritual Library
                    </motion.h1>
                    <motion.div
                        className="w-24 xs:w-32 h-1 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary-400 via-primary-500 to-secondary-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: '6rem' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    />
                    <motion.p
                        className="text-lg text-dark-500 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                    >
                        Explore spiritual books and resources to fuel your faith journey.
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                                delayChildren: 0.2,
                            },
                        },
                    }}
                >
                    {books.map((book, index) => (
                        <motion.div 
                            key={book.id} 
                            className="bg-white/80 backdrop-blur-sm border border-primary-100 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
                            custom={index}
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.98 },
                                visible: { opacity: 1, y: 0, scale: 1 },
                            }}
                            transition={{ type: 'spring', stiffness: 120, damping: 18 }}
                        >
                            <div className={`h-64 ${book.coverColor} flex items-center justify-center p-6 relative group`}>
                                <Book className="w-20 h-20 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{book.title}</h3>
                                <p className="text-sm text-primary-600 font-medium mb-3">{book.author}</p>
                                <p className="text-dark-500 text-sm mb-6 flex-1">{book.description}</p>

                                <button
                                    onClick={() => handleDownload(book.title)}
                                    className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white py-2.5 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                    <Download className="w-4 h-4" />
                                    <span>Download PDF</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
        </>
    );
};

export default Books;
