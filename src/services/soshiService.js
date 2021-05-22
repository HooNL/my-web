import { db } from '@/data/base'

const karbarCollaction = 'Karbar'

export default new class soshiService {
    addKarbar(karbar) {
        return db.collection(karbarCollaction).add(karbar)
    }
}
