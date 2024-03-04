import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import Blog from '@/app/blogs/blog'
const page = () => {
    return (
        <div className='w-full min-h-screen flex items-center justify-between flex-col bg-[rgba(0,0,0,0.9)]'>
            <Header />
            <div id="blogs" className='w-[90%] min-h-[700px] flex justify-around items-center flex-col'>
                <Blog
                    heading={'My take on mutable and immutable data structure.'}
                    text={`Consider the scenario with arrays:
                    You have an array A containing [2, 3, 4]. Then, you create another array B and assign A to it B = A. Here, both A and B are referencing the same array [2, 3, 4].
                    Now, since arrays are mutable, if you modify A by changing its first element A[0] = 78, it directly affects the underlying array. Consequently, both A and B now reflect this change, becoming [78, 3, 4]. This is because they both reference the same mutable object in memory.
                    Now, let's look at an example involving immutable data structures, specifically strings:
                    You have a string X with the value 'hello world!'. Then, you create another string Y and assign X to it Y = X. At this point, both X and Y reference the same string 'hello world!'.
                    Now, suppose you concatenate a new string to X X += 'I am Kartikey'. Since strings are immutable, this operation doesn't modify the existing string; instead, it creates a new string with the concatenated value.  Thus, X now references this new string 'hello world! I am Kartikey', while Y still references the original string 'hello world!'. This behavior showcases the immutability of strings.`}
                />
            </div>
            <Footer />
        </div>
    )
}

export default page