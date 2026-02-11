import { motion } from "framer-motion";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";

interface CommentProps {
  name: string;
  avatar: string;
  comment: string;
  time: string;
  likes: number;
  index: number;
  isReply?: boolean;
}

const Comment = ({ name, avatar, comment, time, likes, index, isReply }: CommentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className={`flex gap-2 py-3 ${isReply ? "ml-14" : ""}`}
    >
      {/* Avatar */}
      <img
        src={avatar}
        alt={name}
        className="w-10 h-10 rounded-full object-cover flex-shrink-0 mt-1"
      />

      <div className="flex-1">
        {/* Comment bubble */}
        <div className="bg-[#f0f2f5] rounded-2xl px-4 py-2.5 inline-block relative">
          {/* Name */}
          <h4 className="font-semibold text-[#050505] text-[15px] mb-0.5">
            {name}
          </h4>

          {/* Comment */}
          <p className="text-[#050505] text-[15px] leading-[1.3]">{comment}</p>
        </div>

        {/* Actions row */}
        <div className="flex items-center mt-1 ml-3">
          <div className="flex items-center gap-2 text-[12px] text-[#65676b] font-medium">
            <button className="hover:underline">Like</button>
            <span>·</span>
            <button className="hover:underline">Reply</button>
            <span>·</span>
            <span>{time}</span>
          </div>
          
          {/* Reactions pill */}
          <div className="ml-auto flex items-center bg-white rounded-full px-1.5 py-0.5 shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="w-[18px] h-[18px] bg-[#1877f2] rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2 21h4V9H2v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z"/>
                </svg>
              </div>
              <div className="w-[18px] h-[18px] bg-[#f33e58] rounded-full flex items-center justify-center -ml-1">
                <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
            </div>
            <span className="text-[#65676b] text-[13px] ml-1">{likes}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CommentsSection = () => {
  const comments = [
    {
      name: "Samantha Anderson",
      avatar: avatar1,
      comment: "I've been taking it for 15 consecutive days and I'm honestly shocked… I walked into the kitchen yesterday and actually remembered what I went in there for. 😂 It's been years since that happened. Thank you!🧠✨",
      time: "2h",
      likes: 23,
    },
    {
      name: "Ashley Thompson",
      avatar: avatar2,
      comment: "FINALLY, SOMEONE WHO TALKS TO US LIKE HUMAN BEINGS. No overpromises, just clear explanations. THANK YOU!! I STARTED TODAY ❤️",
      time: "35 min",
      likes: 17,
      isReply: true,
    },
    {
      name: "Jennifer Davis",
      avatar: avatar3,
      comment: "You explain things in a way that actually makes sense. For people like me who aren't doctors, that's huge. I'm starting the trick tonight.",
      time: "7 min",
      likes: 11,
      isReply: true,
    },
    {
      name: "Melissa Rivera",
      avatar: avatar4,
      comment: "It's not just about remembering stuff… it's about keeping who you are. I cried last night because I remembered my grandson's favorite toy without checking my notes. That moment felt like a miracle.",
      time: "42 min",
      likes: 33,
    },
    {
      name: "Emily Johnson",
      avatar: avatar5,
      comment: "Such a refreshing video. No fear-mongering, no hard sell — just a guy explaining something that works. I already sent it to my mom.👏😍",
      time: "1h",
      likes: 54,
    },
    {
      name: "Lauren Brown",
      avatar: avatar6,
      comment: "I was scared. Truly scared. I kept forgetting appointments, repeating myself mid-sentence, and thinking \"Is this how it starts?\"… I started your routine 5 days ago and already feel lighter. Like my brain isn't in a fog anymore. God bless you 🙏",
      time: "19min",
      likes: 10,
    },
  ];

  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Comments Container */}
        <div className="bg-white border border-[#dadde1] rounded-sm">
          {/* Header */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bold text-[#050505] text-base px-4 py-3 border-b border-[#dadde1]"
          >
            24,321 Comments
          </motion.h2>

          {/* Comments List */}
          <div className="px-4">
            {comments.map((comment, index) => (
              <Comment key={index} {...comment} index={index} />
            ))}
          </div>

          {/* Closed Notice */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center py-4 border-t border-[#dadde1]"
          >
            <p className="text-[#65676b] text-sm font-semibold">
              This post is no longer receiving comments!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommentsSection;
