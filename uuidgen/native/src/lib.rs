use neon::prelude::*;

use rand::{thread_rng};
use rand::distributions::{Uniform, Distribution};

register_module!(mut cx, {
    cx.export_function("gen_uuid", gen_uuid)?;
    cx.export_function("mk_n_uuids", mk_n_uuids)?;
    Ok(())
});

const BOUNDS: &[usize] = &[24, 20, 16, 12]; 
// &[20, 16, 12, 8];// &[12, 4, 4, 4];

fn mk_uuid() -> String {
    let mut bytes = [0u8; 16];
    let dist: Uniform<u8> = Uniform::new(0, 128);
    for (b, r) in bytes.iter_mut().zip(dist.sample_iter(thread_rng())) {
        *b = r;
    }
    // thread_rng().fill(&mut bytes);
    bytes[6] &= 0b01001111;
    bytes[8] &= 0b10111111;
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
