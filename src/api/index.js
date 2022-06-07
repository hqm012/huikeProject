import * as user from "@/api/user"
import * as carousel from "@/api/carousel"
import * as file from "@/api/file"
import * as information from "@/api/information"
import * as item from "@/api/item"
import * as news from "@/api/news"
import * as story from "@/api/story"
import * as tracking from "@/api/tracking"

export default {
    ...user,
    ...carousel,
    ...file,
    ...information,
    ...item,
    ...news,
    ...story,
    ...tracking
}
