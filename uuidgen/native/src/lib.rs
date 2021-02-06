use neon::prelude::*;

use rand::{thread_rng, Rng};

register_module!(mut cx, {
    cx.export_function("gen_uuid", gen_uuid)?;
    cx.export_function("mk_n_uuids", mk_n_uuids)?;
    Ok(())
});

const BOUNDS: &[usize] = &[24, 20, 16, 12]; 
// &[20, 16, 12, 8];// &[12, 4, 4, 4];

fn mk_uuid() -> String {
    let words: u128 = thread_rng().gen();
    let mut bytes: [u8; 16] = words.to_ne_bytes();
    bytes[6] &= 0x0f; // clear top 4 bits
    bytes[6] |= 0x40; // set bit 6
    bytes[8] &= 0x3f; // clear top 2 bits 
    bytes[8] |= 0x80; // set bit 7

    let mut fmt = bytes.iter().map(|b| format!("{:02x}", b)).collect::<String>();//.collect::<Vec<String>>().join("-");
    let mut chunk = String::new();

    for i in BOUNDS {
        chunk.push_str(&fmt.split_off(*i));
        chunk.push('-');
    }
    chunk.push_str(&fmt);
    chunk
}

#[no_mangle]
pub fn gen_uuid(mut cx: FunctionContext) -> JsResult<JsString> {
    Ok(cx.string(mk_uuid()))
}

pub fn mk_n_uuids(mut cx: FunctionContext) -> JsResult<JsArray> {
    let x = cx.argument::<JsNumber>(0)?.value().round() as usize;
    let arr = JsArray::new(&mut cx, x as u32);
    for i in 0..x {
        let jstr = cx.string(mk_uuid());
        arr.set(&mut cx, i as u32, jstr).unwrap();
    }
    Ok(arr)
}

fn _gen_uuid_buf(mut cx: FunctionContext) -> JsResult<JsBuffer> {
    let uuid = mk_uuid();
    let mut arr = JsBuffer::new(&mut cx, 36)?; // static uuid length
    cx.borrow_mut(&mut arr, |data| {
        for (d, c) in data.as_mut_slice::<u8>().into_iter().zip(uuid.bytes()) {
            *d = c;
        }
    });
    Ok(arr)
}

// pub fn gen_uuid_bufs(mut cx: FunctionContext) -> JsResult<JsArray> {
//     let x = cx.argument::<JsNumber>(0)?.value().round() as usize;
//     let arr = JsArray::new(&mut cx, x as u32);
//     for i in 0..x {
//         let uuid = mk_uuid();


//         arr.set(&mut cx, i as u32, gen_uuid_buf(cx)?).unwrap();
//     }
//     Ok(arr)
// }